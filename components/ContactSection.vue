<script setup lang="ts">
import { contact, settings } from "~/data/site";

const form = reactive({ name: "", email: "", message: "" });
const status = ref<"idle" | "sending" | "sent" | "error">("idle");
const whatsappUrl = settings.whatsapp ? `https://wa.me/${settings.whatsapp}` : "";

async function submit() {
  // No form service set up yet: open the visitor's email app with the message filled in.
  if (!settings.formEndpoint) {
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Message from your portfolio"
    )}&body=${encodeURIComponent(body)}`;
    return;
  }
  status.value = "sending";
  try {
    const res = await fetch(settings.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...(settings.formAccessKey ? { access_key: settings.formAccessKey } : {}),
        subject: "Message from your portfolio",
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });
    if (!res.ok) throw new Error("Request failed");
    status.value = "sent";
    form.name = form.email = form.message = "";
  } catch {
    status.value = "error";
  }
}
</script>

<template>
  <section id="contact" class="wrap section">
    <RevealBlock class="section-head">
      <p class="kicker">Contact</p>
      <h2>Let's work together</h2>
      <p class="about-text">Have a project or an idea? Send a message or reach me directly.</p>
    </RevealBlock>

    <div class="contact-layout">
      <RevealBlock>
        <ul class="contact-list">
          <li><span>Email</span><a class="link" :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
          <li><span>Phone</span><a class="link" :href="`tel:${contact.phoneHref}`">{{ contact.phone }}</a></li>
          <li v-if="whatsappUrl"><span>WhatsApp</span><a class="link" :href="whatsappUrl" target="_blank" rel="noopener">Send a message</a></li>
          <li v-if="settings.bookingUrl"><span>Book</span><a class="link" :href="settings.bookingUrl" target="_blank" rel="noopener">Schedule a call</a></li>
          <li><span>LinkedIn</span><a class="link" :href="contact.linkedin.href">{{ contact.linkedin.label }}</a></li>
          <li><span>GitHub</span><a class="link" :href="contact.github.href">{{ contact.github.label }}</a></li>
        </ul>
      </RevealBlock>

      <RevealBlock>
        <form class="form" @submit.prevent="submit">
          <label>
            <span>Name</span>
            <input v-model.trim="form.name" type="text" name="name" required autocomplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input v-model.trim="form.email" type="email" name="email" required autocomplete="email" />
          </label>
          <label>
            <span>Message</span>
            <textarea v-model.trim="form.message" name="message" rows="5" required></textarea>
          </label>
          <button class="btn" type="submit" :disabled="status === 'sending'">
            {{ status === "sending" ? "Sending…" : "Send message" }}
          </button>
          <p v-if="status === 'sent'" class="form-note ok" role="status">Thanks, your message was sent.</p>
          <p v-if="status === 'error'" class="form-note bad" role="alert">
            Something went wrong. Please email me directly at {{ contact.email }}.
          </p>
        </form>
      </RevealBlock>
    </div>
  </section>
</template>
