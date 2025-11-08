import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vivekdhanantar@gmail.com",
      href: "mailto:vivekdhanantar@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7828166109",
      href: "tel:+917828166109",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="contact">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-soft transition-all duration-300 animate-fade-in border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-primary mb-4">
                <info.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
              <a 
                href={info.href} 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {info.value}
              </a>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 max-w-2xl mx-auto shadow-card border-border">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <Button className="w-full bg-gradient-primary hover:opacity-90 transition-all" size="lg">
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
