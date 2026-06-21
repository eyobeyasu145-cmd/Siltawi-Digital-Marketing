import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = '', size = 24 }) => {
  // Retrieve icon component dynamically from Lucide library
  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name];
  
  if (!IconComponent) {
    // Fallback to Sparkles if icon name matches none
    const Fallback = Icons.Sparkles;
    return <Fallback className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
};
