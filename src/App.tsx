import { useState } from 'react';
import { X, Heart } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  message: string;
}

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    { id: 0, url: '/src/images/foto1.jpg', message: 'Te miro y entiendo todo' },
    { id: 1, url: '/src/images/foto2.jpg', message: 'Mi lugar favorito' },
    { id: 2, url: '/src/images/foto3.jpg', message: 'Y pensar que todo comenzó en un tik tok' },
    { id: 3, url: '/src/images/foto4.jpg', message: 'Tus besos son el calor que mi alma necesita' },
    { id: 4, url: '/src/images/foto5.jpg', message: 'Cada recuerdo con vos vale oro' },
    { id: 5, url: '/src/images/foto6.jpg', message: 'Sos mi historia favorita' },
    { id: 6, url: '/src/images/foto7.jpg', message: 'Sos mi persona favorita' },
    { id: 7, url: '/src/images/foto8.jpg', message: 'Prometo cuidarte siempre' },
    { id: 8, url: '/src/images/foto9.jpg', message: 'En ese abrazo, te encontré' },
    { id: 9, url: '/src/images/foto10.jpg', message: 'En estos besos, me encontré' },
    { id: 10, url: '/src/images/foto11.jpg', message: 'Haces que lo simple, lo sea todo' },
    { id: 11, url: '/src/images/foto12.jpg', message: 'No me dejes de abrazar así nunca' },
    { id: 12, url: '/src/images/foto13.jpg', message: 'Con vos, si a todo' },
    { id: 13, url: '/src/images/foto14.jpg', message: 'De esos días que no quiero que se terminen' },
    { id: 14, url: '/src/images/foto15.jpg', message: 'De esas miradas, que quiero que duren para siempre' },
    { id: 15, url: '/src/images/foto16.jpg', message: 'De esas caricias, que calman mi corazón' },
    { id: 16, url: '/src/images/foto17.jpg', message: 'Ninguna flor se compara con lo que florecés en mi vida' },
    { id: 17, url: '/src/images/foto18.jpg', message: 'Nos caemos y nos levantamos, porque esto es amor real' },
    { id: 18, url: '/src/images/foto19.jpg', message: 'Gracias por ser vos' },
    { id: 19, url: '/src/images/foto20.jpg', message: 'Nosotros siendo nosotros' },
  ];

  const getPhoto = (index: number) => photos.find(p => p.id === index);

  const handlePhotoClick = (index: number) => {
    const photo = getPhoto(index);
    if (photo) {
      setSelectedPhoto(photo);
    }
  };

  const PhotoBox = ({ index, className = '' }: { index: number; className?: string }) => {
    const photo = getPhoto(index);
    return (
      <div
        className={`relative w-12 h-12 sm:w-16 sm:h-16 bg-white border border-gray-300 rounded-md overflow-hidden cursor-pointer hover:border-rose-400 transition-all ${className}`}
        onClick={() => handlePhotoClick(index)}
      >
        {photo && (
          <>
            <img src={photo.url} alt="" className="w-full h-full object-cover" />
            {photo.message && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-0.5">
                <Heart className="w-2 h-2 sm:w-3 sm:h-3 text-rose-400 mx-auto" />
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  const LetterBox = ({ letter, color }: { letter: string; color?: string }) => (
    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-white border border-gray-300 rounded-md flex items-center justify-center text-xl sm:text-3xl font-bold ${color || 'text-rose-500'}`}>
      {letter}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center p-2 sm:p-4 overflow-x-hidden">
      <div className="flex flex-col items-center gap-3 sm:gap-6 w-full max-w-md">
        {/* Header message */}
        <h1 className="text-lg sm:text-2xl md:text-4xl font-serif text-rose-600 text-center px-2" style={{ fontFamily: 'Georgia, serif' }}>
          Nuestro amor en cada momento
        </h1>

        <div className="flex flex-col items-center gap-1 sm:gap-2">
        {/* Row 1: 2 photos + space + 2 photos */}
        <div className="flex gap-1 sm:gap-2">
          <PhotoBox index={0} />
          <PhotoBox index={1} />
          <div className="w-12 sm:w-16" />
          <PhotoBox index={2} />
          <PhotoBox index={3} />
        </div>

        {/* Row 2: 7 photos */}
        <div className="flex gap-1 sm:gap-2">
          {[4, 5, 6, 7, 8, 9, 10].map(i => (
            <PhotoBox key={i} index={i} />
          ))}
        </div>

        {/* Row 3: ♥♥Pri♥♥ */}
        <div className="flex gap-1 sm:gap-2">
          <LetterBox letter="♥" color="text-red-500" />
          <LetterBox letter="♥" color="text-red-500" />
          <LetterBox letter="P" />
          <LetterBox letter="r" />
          <LetterBox letter="i" />
          <LetterBox letter="♥" color="text-red-500" />
          <LetterBox letter="♥" color="text-red-500" />
        </div>

        {/* Row 4: 5 photos */}
        <div className="flex gap-1 sm:gap-2">
          {[11, 12, 13, 14, 15].map(i => (
            <PhotoBox key={i} index={i} />
          ))}
        </div>

        {/* Row 5: 3 photos */}
        <div className="flex gap-1 sm:gap-2">
          <div className="w-12 sm:w-16" />
          {[16, 17, 18].map(i => (
            <PhotoBox key={i} index={i} />
          ))}
          <div className="w-12 sm:w-16" />
        </div>

        {/* Row 6: 1 photo */}
        <div className="flex gap-1 sm:gap-2">
          <div className="w-12 sm:w-16" />
          <div className="w-12 sm:w-16" />
          <PhotoBox index={19} />
          <div className="w-12 sm:w-16" />
          <div className="w-12 sm:w-16" />
        </div>
        </div>

        {/* Footer message */}
        <p className="text-base sm:text-xl md:text-2xl font-serif text-rose-600 text-center px-2" style={{ fontFamily: 'Georgia, serif' }}>
          Gracias por hacerme tan feliz
        </p>
      </div>

      {/* Modal for zoom and message */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-3 z-50" onClick={() => setSelectedPhoto(null)}>
          <div className="bg-white rounded-xl p-4 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg sm:text-xl font-bold text-rose-600">Momento Especial</h3>
              <button onClick={() => setSelectedPhoto(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <img src={selectedPhoto.url} alt="" className="w-full max-h-[60vh] object-contain rounded-lg mb-3" />
            {selectedPhoto.message && (
              <p className="text-center text-gray-700 text-sm sm:text-base italic">
                {selectedPhoto.message}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
