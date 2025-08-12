import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScoreBoardProps {
  profit: number;
  risk: number;
  satisfaction: number;
}

const ScoreCard = ({ title, value, colorClass }: { title: string; value: number; colorClass: string }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className={`text-2xl font-bold ${colorClass}`}>{value}</div>
      <p className="text-xs text-muted-foreground">/ 50 to win</p>
    </CardContent>
  </Card>
);

export const ScoreBoard = ({ profit, risk, satisfaction }: ScoreBoardProps) => {
  return (
    <div className="grid gap-4 grid-cols-3">
      <ScoreCard title="💰 Profit" value={profit} colorClass="text-green-500" />
      <ScoreCard title="⚠️ Risk Management" value={risk} colorClass="text-yellow-500" />
      <ScoreCard title="😊 Customer Satisfaction" value={satisfaction} colorClass="text-blue-500" />
    </div>
  );
};