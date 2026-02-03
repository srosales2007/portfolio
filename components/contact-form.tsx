"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <Card className="border-border/70 bg-card/70 backdrop-blur">
      <CardHeader>
        <CardTitle>Envíame un mensaje</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Nombre</label>
            <Input
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              placeholder="Tu nombre"
              required
              minLength={2}
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder="tucorreo@email.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">Mensaje</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              placeholder="Cuéntame sobre tu idea..."
              required
              minLength={10}
              rows={5}
            />
          </div>

          <Button type="submit" className="w-full rounded-full" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar"}
          </Button>

          {status === "success" && <p className="text-sm text-emerald-600">¡Listo! Mensaje enviado.</p>}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Ocurrió un error. Intenta de nuevo o contáctame por WhatsApp.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
