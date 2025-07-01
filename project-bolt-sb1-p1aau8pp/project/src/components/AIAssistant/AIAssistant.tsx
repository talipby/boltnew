import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Merhaba! Ben Koroğlu Kuruyemiş\'in sanal asistanıyım. Size nasıl yardımcı olabilirim?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Fiyat soruları
    if (lowerMessage.includes('fiyat') || lowerMessage.includes('kaç para') || lowerMessage.includes('ne kadar')) {
      if (lowerMessage.includes('antep') || lowerMessage.includes('fıstık')) {
        return 'Antep fıstığımız kg başına 450₺\'dir. Minimum sipariş miktarı 5 kg\'dır. Toptan alımlarda indirim imkanı mevcuttur.';
      }
      if (lowerMessage.includes('badem')) {
        return 'Kaliforniya bademi 280₺/kg, çiğ badem 240₺/kg fiyatındadır. Minimum sipariş 10 kg\'dır.';
      }
      if (lowerMessage.includes('ceviz')) {
        return 'Premium ceviz içi 320₺/kg, pekan cevizi 380₺/kg\'dır. Minimum sipariş 5 kg\'dır.';
      }
      return 'Hangi ürünün fiyatını öğrenmek istiyorsunuz? Size detaylı bilgi verebilirim.';
    }
    
    // Kargo/teslimat soruları
    if (lowerMessage.includes('kargo') || lowerMessage.includes('teslimat') || lowerMessage.includes('gönderi')) {
      return 'Kargo ücretsiz teslimat için minimum 500₺ alışveriş gereklidir. Siparişleriniz 1-3 iş günü içinde kargoya verilir. Türkiye geneli teslimat yapıyoruz.';
    }
    
    // Minimum sipariş soruları
    if (lowerMessage.includes('minimum') || lowerMessage.includes('en az')) {
      return 'Her ürünümüzün kendine özel minimum sipariş miktarı vardır. Genellikle 5-25 kg arasında değişmektedir. Ürün sayfalarından detayları inceleyebilirsiniz.';
    }
    
    // Kalite soruları
    if (lowerMessage.includes('kalite') || lowerMessage.includes('taze') || lowerMessage.includes('organik')) {
      return 'Tüm ürünlerimiz günlük taze ve kalite kontrolünden geçmiştir. Organik sertifikalı ürünlerimiz de mevcuttur. 1985\'den beri kaliteli hizmet sunuyoruz.';
    }
    
    // İletişim soruları
    if (lowerMessage.includes('iletişim') || lowerMessage.includes('telefon') || lowerMessage.includes('adres')) {
      return 'Telefon: 0212 555 01 23\nE-posta: info@koroglukuruyemistoptan.com.tr\nAdres: Atatürk Mahallesi, Kuruyemiş Sokak No:15, 34xxx Fatih/İstanbul';
    }
    
    // Genel selamlama
    if (lowerMessage.includes('merhaba') || lowerMessage.includes('selam')) {
      return 'Merhaba! Size nasıl yardımcı olabilirim? Fiyat bilgisi, ürün detayları veya sipariş hakkında sorularınızı yanıtlayabilirim.';
    }
    
    // Varsayılan yanıt
    return 'Bu konuda size yardımcı olmaya çalışayım. Fiyat bilgisi, ürün detayları, kargo koşulları veya diğer sorularınız için detay verebilirim. Lütfen daha spesifik bir soru sorun.';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-xl hover:bg-orange-600 transition-colors z-50 animate-pulse"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-orange-500 text-white p-6 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="w-6 h-6" />
              <span className="font-bold text-lg">AI Asistan</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-4 rounded-2xl text-sm ${
                    message.isUser
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-4 rounded-2xl text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Mesajınızı yazın..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;