import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Componente para mostrar métricas usando i18n
 * Demuestra las mejores prácticas para mapear arrays de traducciones
 */
export const MetricsDisplay: React.FC = () => {
  const { t } = useTranslation();

  // Obtener las métricas del archivo de traducción
  const metrics = t('about.metrics', { returnObjects: true }) as Array<{
    key: string;
    label: string;
    value: string;
  }>;

  return (
    <div className="flex flex-wrap justify-center w-full gap-0.5">
      {metrics.map((metric) => (
        <div 
          key={metric.key} // Usar la key única para el key de React
          className="flex flex-col items-center bg-white/10 backdrop:blur-2xl justify-center font-family-heading p-4 w-64 hover:bg-ink-600 transition-all duration-300"
        >
          <div className="text-4xl font-bold">
            {metric.value}
          </div>
          <div className="text-sm">
            {metric.label}  
          </div>
        </div>
      ))}
    </div>
  );
};
