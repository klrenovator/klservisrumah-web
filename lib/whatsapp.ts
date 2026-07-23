import { siteConfig } from "@/config/site";

export function getWhatsAppLink(messageDetails?: { service?: string; location?: string }) {
  let text = "Hello KL Servis Rumah! I want to book a home service.";
  
  if (messageDetails) {
    if (messageDetails.service && messageDetails.location) {
      text = `Hi KL Servis Rumah! I am looking for professional ${messageDetails.service} service in ${messageDetails.location}. Can I check your slot availability?`;
    } else if (messageDetails.service) {
      text = `Hi KL Servis Rumah! I would like to get a quote for ${messageDetails.service} service for my property.`;
    } else if (messageDetails.location) {
      text = `Hi KL Servis Rumah! I am located in ${messageDetails.location} and would like to check what slots are available this week.`;
    }
  }

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodedText}`;
}
