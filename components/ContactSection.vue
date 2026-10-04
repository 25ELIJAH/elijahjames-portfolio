<script setup lang="ts">
import { contact, settings, contactServices } from "~/data/site";

const form = reactive({ name: "", service: "", location: "", message: "" });
const status = ref<"idle" | "sending" | "sent" | "error">("idle");
const sentName = ref("");

async function submit() {
  // No form service set up: open the visitor's email app with the details filled in.
  if (!settings.formEndpoint) {
    const body = `Full name: ${form.name}\nService wanted: ${form.service}\nLocation: ${form.location}\n\n${form.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "New enquiry from your portfolio"
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
        subject: `New enquiry: ${form.service}`,
        from_name: "Portfolio website",
        "Full name": form.name,
        "Service wanted": form.service,
        Location: form.location,
        Message: form.message,
        botcheck: "", // spam trap, stays empty for real visitors
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) throw new Error("Request failed");
    sentName.value = form.name.split(" ")[0];
    status.value = "sent";
    form.name = form.service = form.location = form.message = "";
  } catch {
    status.value = "error";
  }
}

function sendAnother() {
  status.value = "idle";
}
</script>

<template>
  <section id="contact" class="wrap section">
    <RevealBlock class="section-head">
      <p class="kicker">Contact</p>
      <h2>Let's work together</h2>
      <p class="about-text">Tell me what you need and I'll get back to you. You can also reach me directly.</p>
    </RevealBlock>

    <div class="contact-layout">
      <RevealBlock>
        <ul class="contact-list">
          <li><span>Email</span><a class="link" :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
          <li><span>Phone</span><a class="link" :href="`tel:${contact.phoneHref}`">{{ contact.phone }}</a></li>
          <li v-if="settings.bookingUrl"><span>Book</span><a class="link" :href="settings.bookingUrl" target="_blank" rel="noopener">Schedule a call</a></li>
          <li class="find-me"><span>Find me on</span><SocialLinks /></li>
        </ul>
      </RevealBlock>

      <RevealBlock>
        <div v-if="status === 'sent'" class="form-done" role="status" aria-live="polite">
          <span class="done-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>
          </span>
          <h3>Message received</h3>
          <p>
            Thank you<span v-if="sentName">, {{ sentName }}</span>. Your details and message have been received and
            sent to me. I'll get back to you soon.
          </p>
          <button class="btn btn-outline" type="button" @click="sendAnother">Send another message</button>
        </div>

        <form v-else class="form" @submit.prevent="submit">
          <label>
            <span>Full name</span>
            <input v-model.trim="form.name" type="text" name="full_name" required autocomplete="name" placeholder="Your full name" />
          </label>
          <label>
            <span>Service wanted</span>
            <select v-model="form.service" name="service" required>
              <option value="" disabled>Choose a service</option>
              <option v-for="s in contactServices" :key="s" :value="s">{{ s }}</option>
            </select>
          </label>
          <label>
            <span>Location</span>
            <input v-model.trim="form.location" type="text" name="location" required autocomplete="address-level2" placeholder="City or town, country" />
          </label>
          <label>
            <span>Message</span>
            <textarea v-model.trim="form.message" name="message" rows="5" required placeholder="Tell me about your project or what you need"></textarea>
          </label>
          <button class="btn" type="submit" :disabled="status === 'sending'">
            {{ status === "sending" ? "Sending…" : "Send message" }}
          </button>
          <p v-if="status === 'error'" class="form-note bad" role="alert">
            Something went wrong and your message was not sent. Please try again, or email me at {{ contact.email }}.
          </p>
        </form>
      </RevealBlock>
    </div>
  </section>
</template>
