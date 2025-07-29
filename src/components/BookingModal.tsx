// src/components/BookingModal.tsx

import React, { useState, useEffect } from 'react';
import './BookingModal.css';

interface Barbero {
  id: number;
  nome: string;
  foto: string;
}

interface TipoCorte {
  id: number;
  nome: string;
  icone: string;
}

interface HorarioDisponivel {
  id: number;
  hora: string;
}

// Dados dummy para horários (em um ambiente real, isso seria dinâmico)
const getHorariosParaData = (date: string): HorarioDisponivel[] => {
  // Simulação: Horários diferentes para um dia específico (ex: 21 de Julho)
  if (date === '2025-07-21') {
    return [
      { id: 1, hora: '09:00' },
      { id: 2, hora: '09:30' },
      { id: 3, hora: '10:00' },
      { id: 4, hora: '10:30' },
      { id: 5, hora: '11:00' },
      { id: 6, hora: '11:30' },
      { id: 7, hora: '12:30' },
      { id: 8, hora: '13:00' },
      { id: 9, hora: '14:00' },
      { id: 10, hora: '14:30' },
    ];
  }
  // Horários padrão para outros dias
  return [
    { id: 1, hora: '09:00' },
    { id: 2, hora: '09:30' },
    { id: 3, hora: '10:00' },
    { id: 4, hora: '10:30' },
    { id: 5, hora: '11:00' },
    { id: 6, hora: '11:30' },
    { id: 7, hora: '14:00' },
    { id: 8, hora: '14:30' },
    { id: 9, hora: '15:00' },
    { id: 10, hora: '15:30' },
  ];
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteBooking: (data: {
    barberId: number | null;
    cutId: number | null;
    date: string | null;
    timeId: number | null;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
  }) => void;
}

const barbeirosDisponiveis: Barbero[] = [
  { id: 1, nome: 'Robert Simon', foto: '/images/barbeiro_robert.jpg' },
  { id: 2, nome: 'João Pereira', foto: '/images/barbeiro_joao.jpg' },
  { id: 3, nome: 'Afonso Bento', foto: '/images/barbeiro_afonso.jpg' },
  { id: 4, nome: 'Tiago Antunes', foto: '/images/barbeiro_tiago.jpg' },
];

const tiposDeCorte: TipoCorte[] = [
  { id: 101, nome: 'Corte simples', icone: '/images/corte_simples_icon.png' },
  { id: 102, nome: 'Corte e barba', icone: '/images/corte_barba_icon.png' },
  { id: 103, nome: 'Barba', icone: '/images/barba_icon.png' },
  { id: 104, nome: 'Disfarce', icone: '/images/disfarce_icon.png' },
];

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onCompleteBooking }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBarberId, setSelectedBarberId] = useState<number | null>(null);
  const [selectedCutId, setSelectedCutId] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [availableTimes, setAvailableTimes] = useState<HorarioDisponivel[]>([]);

  // Estados para os campos do formulário
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');


  useEffect(() => {
    if (selectedDate) {
      setAvailableTimes(getHorariosParaData(selectedDate));
    } else {
      setAvailableTimes([]);
    }
  }, [selectedDate]);


  if (!isOpen) return null;

  const handleNextStep = () => {
    if (currentStep === 1 && selectedBarberId !== undefined) {
      setCurrentStep(2);
    } else if (currentStep === 2 && selectedCutId !== null) {
      setCurrentStep(3);
    } else if (currentStep === 3 && selectedDate !== null && selectedTimeId !== null) {
        setCurrentStep(4);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 2) setSelectedCutId(null);
      if (currentStep === 3) { setSelectedDate(null); setSelectedTimeId(null); }
      if (currentStep === 4) {
          setClientName('');
          setClientEmail('');
          setClientPhone('');
      }
    }
  };

  const handleBarberSelect = (barberId: number | null) => {
    setSelectedBarberId(barberId);
    setSelectedCutId(null); // Reseta a seleção de corte
    setSelectedDate(null); // Reseta data/hora
    setSelectedTimeId(null);
    setCurrentStep(2); // Avança automaticamente
  };

  const handleCutSelect = (cutId: number) => {
    setSelectedCutId(cutId);
    setSelectedDate(null); // Reseta data/hora
    setSelectedTimeId(null);
    setCurrentStep(3); // Avança automaticamente
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTimeId(null); // Limpa o horário selecionado ao mudar a data
  };

  const handleTimeSelect = (timeId: number) => {
    setSelectedTimeId(timeId);
  };

  const handleFinalConfirm = () => {
    // Validação básica dos campos do formulário
    if (!clientName || !clientEmail || !clientPhone) {
        alert('Por favor, preencha todos os seus dados.');
        return;
    }

    onCompleteBooking({
      barberId: selectedBarberId,
      cutId: selectedCutId,
      date: selectedDate,
      timeId: selectedTimeId,
      clientName,
      clientEmail,
      clientPhone,
    });
    onClose();
    // Resetar todos os estados para a próxima vez que o modal for aberto
    setCurrentStep(1);
    setSelectedBarberId(null);
    setSelectedCutId(null);
    setSelectedDate(null);
    setSelectedTimeId(null);
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setCurrentMonth(new Date().getMonth());
    setCurrentYear(new Date().getFullYear());
  };

  const getProgressBarWidth = () => {
    return (currentStep / 4) * 100 + '%';
  };

  // Lógica do Calendário
  const getDaysInMonth = (month: number, year: number) => {
    const date = new Date(year, month, 1);
    // REMOVIDO: const days = []; // Esta linha causava o erro TS6133
    // Ajuste para começar na segunda-feira
    let firstDayOfWeek = date.getDay(); // 0 = Dom, 1 = Seg, ..., 6 = Sab
    if (firstDayOfWeek === 0) firstDayOfWeek = 7; // Trata domingo como 7 para ajuste
    const emptyCellsStart = Array(firstDayOfWeek - 1).fill(null); // Preenche até a segunda-feira

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tempDays = [];
    while (date.getMonth() === month) {
      tempDays.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    // Adiciona dias do próximo mês para completar a última semana, se necessário
    const lastDayOfMonth = tempDays[tempDays.length - 1];
    let lastDayOfWeek = lastDayOfMonth.getDay(); // 0 = Dom, 1 = Seg, ..., 6 = Sab
    if (lastDayOfWeek === 0) lastDayOfWeek = 7;
    const emptyCellsEnd = Array(7 - lastDayOfWeek).fill(null);

    return [...emptyCellsStart, ...tempDays, ...emptyCellsEnd];
  };


  const renderCalendarDays = () => {
    const allCells = getDaysInMonth(currentMonth, currentYear);

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Zera hora para comparação de data

    return allCells.map((day, index) => {
      if (!day) {
        return <div key={`empty-${index}`} className="calendar-day empty"></div>;
      }

      const dayString = day.toISOString().split('T')[0];
      const isSelected = selectedDate === dayString;
      const isPast = day < today; // Verifica se a data é anterior ao dia de hoje

      return (
        <div
          key={dayString}
          className={`calendar-day ${isSelected ? 'selected' : ''} ${isPast ? 'past-day' : ''}`}
          onClick={() => !isPast && handleDateSelect(dayString)}
        >
          {day.getDate()}
        </div>
      );
    });
  };

  const getMonthName = (monthIndex: number) => {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return monthNames[monthIndex];
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentMonth(prev => prev === 0 ? 11 : prev - 1);
      if (currentMonth === 0) setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev === 11 ? 0 : prev + 1);
      if (currentMonth === 11) setCurrentYear(prev => prev + 1);
    }
    setSelectedDate(null); // Limpa a data selecionada ao mudar o mês
    setSelectedTimeId(null); // Limpa o horário selecionado
  };


  const renderStepContent = () => {
    const selectedBarber = barbeirosDisponiveis.find(b => b.id === selectedBarberId);
    const selectedCut = tiposDeCorte.find(c => c.id === selectedCutId);
    const selectedTime = availableTimes.find(h => h.id === selectedTimeId);


    switch (currentStep) {
      case 1: // Escolher Barbeiro
        return (
          <>
            <p className="modal-subtitle">Escolhe o teu barbeiro</p>
            <div className="barber-selection-grid">
              {barbeirosDisponiveis.map((barber) => (
                <div
                  key={barber.id}
                  className={`barber-option-card ${selectedBarberId === barber.id ? 'selected' : ''}`}
                  onClick={() => handleBarberSelect(barber.id)}
                >
                  <img src={barber.foto} alt={barber.nome} className="barber-profile-pic" />
                  <p className="barber-name">{barber.nome}</p>
                </div>
              ))}
            </div>
            <button
              className={`no-preference-button ${selectedBarberId === null ? 'selected' : ''}`}
              onClick={() => handleBarberSelect(null)}
            >
              <span className="no-preference-icon">&#x26D4;</span>
              Sem preferência
            </button>
          </>
        );
      case 2: // Escolher Corte
        return (
          <>
            <p className="modal-subtitle">Escolhe o teu corte</p>
            <div className="cut-selection-grid">
              {tiposDeCorte.map((corte) => (
                <div
                  key={corte.id}
                  className={`cut-option-card ${selectedCutId === corte.id ? 'selected' : ''}`}
                  onClick={() => handleCutSelect(corte.id)}
                >
                  <img src={corte.icone} alt={corte.nome} className="cut-icon" />
                  <p className="cut-name">{corte.nome}</p>
                </div>
              ))}
            </div>
          </>
        );
      case 3: // Escolher Data e Hora
        return (
            <>
                <p className="modal-subtitle">Agenda o teu corte</p>
                <div className="datetime-selection-container">
                    <div className="calendar-container">
                        <div className="calendar-header">
                            <button className="calendar-nav-button" onClick={() => handleMonthChange('prev')}>&lt;</button>
                            <span className="current-month-year">{getMonthName(currentMonth)} {currentYear}</span>
                            <button className="calendar-nav-button" onClick={() => handleMonthChange('next')}>&gt;</button>
                        </div>
                        <div className="calendar-weekdays">
                            <div>Seg</div>
                            <div>Ter</div>
                            <div>Qua</div>
                            <div>Qui</div>
                            <div>Sex</div>
                            <div>Sáb</div>
                            <div>Dom</div>
                        </div>
                        <div className="calendar-grid">
                            {renderCalendarDays()}
                        </div>
                    </div>

                    {selectedDate && (
                        <div className="time-selection-column">
                            <div className="time-selection-grid">
                                {availableTimes.length > 0 ? (
                                    availableTimes.map(horario => (
                                        <div
                                            key={horario.id}
                                            className={`time-option-card ${selectedTimeId === horario.id ? 'selected' : ''}`}
                                            onClick={() => handleTimeSelect(horario.id)}
                                        >
                                            {horario.hora}
                                        </div>
                                    ))
                                ) : (
                                    <p className="no-times-message">Não há horários disponíveis para esta data.</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <button
                    className="next-step-button"
                    onClick={handleNextStep}
                    disabled={selectedDate === null || selectedTimeId === null}
                >
                    Seguinte
                </button>
            </>
        );
      case 4: // Confirmação e Formulário de Dados Pessoais
        return (
            <>
                <p className="modal-subtitle">Confirma a tua marcação</p>
                <div className="booking-summary-top">
                    <div className="summary-card">
                        <p className="summary-cut-name">{selectedCut ? selectedCut.nome : 'Corte Indefinido'}</p>
                        <p className="summary-barber-date-time">
                            {selectedBarber ? selectedBarber.nome : 'Sem preferência'} &bull;
                            {selectedDate && new Date(selectedDate).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })} &bull;
                            {selectedTime ? selectedTime.hora : ''}
                        </p>
                    </div>
                    {selectedBarber && (
                        <img src={selectedBarber.foto} alt={selectedBarber.nome} className="summary-barber-pic" />
                    )}
                </div>

                <div className="client-details-form">
                    <label htmlFor="clientName">Nome</label>
                    <input
                        type="text"
                        id="clientName"
                        placeholder="Primeiro e último nome"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                    />

                    <label htmlFor="clientEmail">E-Mail</label>
                    <input
                        type="email"
                        id="clientEmail"
                        placeholder="oseu@gmail.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                    />

                    <label htmlFor="clientPhone">Número de telemóvel</label>
                    <input
                        type="tel"
                        id="clientPhone"
                        placeholder="912345678"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                    />
                </div>

                <button
                    className="next-step-button"
                    onClick={handleFinalConfirm}
                    disabled={!clientName || !clientEmail || !clientPhone}
                >
                    Confirmar Marcação
                </button>
            </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        {currentStep > 1 && (
          <button className="modal-back-button" onClick={handlePreviousStep}>&larr;</button>
        )}
        <h2 className="modal-title">MARCAÇÕES</h2>
        <div className="progress-bar-container">
          <div className="progress-text">{currentStep}/4</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: getProgressBarWidth() }}></div>
            <img src="/images/flame_icon.png" alt="Progresso" className="flame-icon" style={{ left: `calc(${getProgressBarWidth()} - 12.5px)` }}/>
          </div>
        </div>
        
        {renderStepContent()}

      </div>
    </div>
  );
};

export default BookingModal;