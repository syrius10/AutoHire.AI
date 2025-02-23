export const createCheckout = async () => {
    try {
      const response = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error("❌ Error starting payment:", error);
    }
  };  