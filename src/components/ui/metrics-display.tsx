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
    <div className="grid grid-cols-2 grid-rows-2 gap-4 text-center">
      {metrics.map((metric) => (
        <div 
          key={metric.key} // Usar la key única para el key de React
          className="flex flex-col items-center justify-center font-family-heading"
        >
          <div className="text-3xl font-bold">
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
