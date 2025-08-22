import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Differentials from './components/Differentials';
import About from './components/About';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import WrittenTestimonials from './components/WrittenTestimonials';
import MembershipBenefits from './components/MembershipBenefits';
import ObjectionsSection from './components/ObjectionsSection';
import Plans from './components/Plans';
import PBISection from './components/PBISection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import WhatsAppButton from './components/WhatsAppButton';
import CadastroModal from './components/CadastroModal';

function App() {
  const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);

  const handleDirectRedirect = () => {
    setIsCadastroModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="font-sans text-gray-100 overflow-x-hidden bg-black min-h-screen">
        <Navbar />
        {/* 1. HERO - Problema + Agitação */}
        <Hero onRedirect={handleDirectRedirect} />
        
        {/* 2. TESTIMONIALS - Prova social logo após o Hero */}
        <Testimonials />
        
        {/* 3. BENEFITS - Apresenta a solução imediatamente */}
        <Benefits onRedirect={handleDirectRedirect} />
        
        {/* 4. ABOUT - Dá contexto sobre a empresa, cria proximidade e humaniza */}
        <About />
        
        {/* 5. DIFFERENTIALS - Mostra o porquê somos diferentes dos concorrentes */}
        <Differentials onRedirect={handleDirectRedirect} />
        
        {/* 6. TRUST - Elimina as últimas objeções e prepara o terreno para o CTA final */}
        <TrustSection onRedirect={handleDirectRedirect} />
        
        {/* 7. WRITTEN TESTIMONIALS - Prova social escrita */}
        <WrittenTestimonials onRedirect={handleDirectRedirect} />
        
        {/* 8. MEMBERSHIP BENEFITS - Valor agregado (sweeteners) */}
        <MembershipBenefits onRedirect={handleDirectRedirect} />
        
        {/* 9. OBJECTIONS - Remove barreiras finais */}
        <ObjectionsSection onRedirect={handleDirectRedirect} />
        
        {/* 10. PLANS - Momento da oferta (quando já estão convencidos) */}
        <Plans onRedirect={handleDirectRedirect} />
        
        {/* 10.5. PBI SECTION - Programa de Indicação para transformar internet em renda */}
        <PBISection onRedirect={handleDirectRedirect} />
        
        {/* 11. FAQ - Últimas dúvidas antes da conversão */}
        <FAQ />
        
        {/* 12. FOOTER - Fechamento */}
        <Footer />
        
        {/* Exit Intent Popup */}
        <ExitIntentPopup onRedirect={handleDirectRedirect} />
        
        {/* Cadastro Modal */}
        <CadastroModal 
          isOpen={isCadastroModalOpen} 
          onClose={() => setIsCadastroModalOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;