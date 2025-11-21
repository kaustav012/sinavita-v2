import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

// Utility to get a specific cookie by name
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

// Utility to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent cookie is already set
    const consent = getCookie('cookieConsent');
    if (consent === 'accepted' || consent === 'rejected') {
      setVisible(false);
      return;
    }

    // Show banner with slight delay for effect
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    setCookie('cookieConsent', 'accepted', 365);
    setVisible(false);
    // You can initialize analytics or other cookies here
  };

  const reject = () => {
    setCookie('cookieConsent', 'rejected', 365);
    setVisible(false);
    // Ensure no non-essential cookies are set
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-[200px] transform -translate-x-1/2 z-50 animate-fade-in">
      <Card className="w-[380px] bg-background border border-muted rounded-2xl shadow-2xl p-5 backdrop-blur-md">
        <CardContent className="p-0">
          <p className="text-sm text-muted-foreground">
            We use cookies to enhance your experience. You can accept or reject them below.
          </p>
        </CardContent>
        <CardFooter className="p-0 mt-5 flex justify-end space-x-2">
          <Button variant="ghost" className="hover:bg-muted" onClick={reject}>
            Reject
          </Button>
          <Button onClick={accept}>
            Accept
          </Button>
        </CardFooter>
      </Card>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
