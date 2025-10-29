import React, { useRef } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { Report, models } from "powerbi-client";

interface PowerBIEmbederProps {
  type: "report" | "dashboard" | "tile";
  id: string; // reportId or dashboardId
  embedUrl: string;
  accessToken: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function PowerBIEmbeder({
  type,
  id,
  embedUrl,
  accessToken,
  className,
  style,
}: PowerBIEmbederProps) {
  const embeddedRef = useRef<Report | null>(null);

  const embedConfig = {
    type,
    id,
    embedUrl,
    accessToken,
    tokenType: models.TokenType.Embed,
    settings: {
      panes: {
        filters: { visible: false },
        pageNavigation: { visible: false },
      },
      navContentPaneEnabled: false,
      background: models.BackgroundType.Transparent,
    },
  };

  return (
    <div
      style={{
        height: "85vh", 
        width: "100%", 
        flexGrow: 1, 
        padding: 0,
        border: "none",
        // overflow: "hidden",
        ...style,
      }}
      className={className}
    >
      <PowerBIEmbed
        embedConfig={embedConfig}
        cssClassName="powerbi-container"
        getEmbeddedComponent={(embedded) => {
          if (embedded?.embedtype === "report") {
            embeddedRef.current = embedded as Report;
          }
        }}
      />
    </div>
  );
}
