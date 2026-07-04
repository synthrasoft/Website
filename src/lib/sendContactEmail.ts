export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file."
    );
  }

  const subject = `New inquiry from ${data.name}${data.company ? ` ${data.company}` : ""}`;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: data.name,
      email: data.email,
      replyto: data.email,
      company: data.company || "Not provided",
      message: data.message,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to send your message. Please try again later.");
  }

  const result = (await response.json()) as Web3FormsResponse;

  if (!result.success) {
    throw new Error(result.message || "Unable to send your message. Please try again later.");
  }
}
