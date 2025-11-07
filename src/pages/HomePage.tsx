import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import PowerBIEmbeder from "../components/PowerBIEmbeder";
import type { Dashboard } from "../types/index";

export default function HomePage() {
  const [accessToken, setAccessToken] = useState<{
    embedToken: string;
    expiration: string;
  } | null>(null);
  const dashboard: Dashboard = {
    title: "AIX HUB Retail Insights",
    groupId: "899d6b87-540f-4021-81b3-6efcca98c547",
    reportId: "f153c1fc-b933-4c21-8463-d03b3e3c2e27",
    type: "report",
    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f153c1fc-b933-4c21-8463-d03b3e3c2e27&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19"
  };

  const getAccessToken = useCallback(async () => {
    try {
      const reqData = {
        groupId: dashboard.groupId,
        reportId: dashboard.reportId,
      };
      const res = await axios.post(
        "http://localhost:5000/api/powerbi/embed-token",
        reqData
      );

      if (res.status !== 200) {
        throw Error();
      }
      return res.data;
    } catch (error) {
      console.log("error", error);
    }
  }, [dashboard.groupId, dashboard.reportId]);

  useEffect(() => {
    (async () => {
      const token = await getAccessToken();
      if (token) {
        setAccessToken(token);
      }
    })();
  }, [getAccessToken]);

  return (
    <>
      {accessToken ? (
        <PowerBIEmbeder
          type={dashboard.type}
          id={dashboard.reportId}
          embedUrl={dashboard.embedUrl}
          accessToken={accessToken.embedToken}
          style={{ height: "85vh", width: "100%", flexGrow: 1 }}
        />
      ) : null}
    </>
  );
}
