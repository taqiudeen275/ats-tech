
import { SoundProvider } from '@/context/SoundContext';
import { ThemeProvider } from '@/context/ThemeContext';
import AppContent from './AppContent';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SoundProvider>
        <AppContent />
      </SoundProvider>
    </ThemeProvider>
  );
};

export default App;