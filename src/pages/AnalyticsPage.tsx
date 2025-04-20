
import Layout from "@/components/layout/Layout";
import AnalyticsCard from "@/components/analytics/AnalyticsCard";
import { getAnalyticsData } from "@/utils/journal-data";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area, 
  CartesianGrid, 
  ResponsiveContainer,
  Legend
} from "recharts";

const COLORS = [
  '#8B5CF6', '#D946EF', '#F97316', '#0EA5E9', '#10B981', 
  '#F59E0B', '#EF4444', '#06B6D4', '#8B5CF6', '#EC4899'
];

const AnalyticsPage = () => {
  const analytics = getAnalyticsData();
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-journal mb-2">Journal Insights</h1>
          <p className="text-muted-foreground font-handwriting text-xl">
            Analytics and patterns from your journal entries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <AnalyticsCard title="Words Written Per Day">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics.wordCountByDay}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value: number) => [`${value} words`, 'Count']}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                  />
                  <Bar 
                    dataKey="count" 
                    fill="hsl(var(--primary))" 
                    radius={[4, 4, 0, 0]} 
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnalyticsCard>
          
          <AnalyticsCard title="Mood Distribution">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analytics.moodDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="count"
                    nameKey="mood"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    animationDuration={1500}
                  >
                    {analytics.moodDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number, name: string, props: any) => [value, props.payload.mood]}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </AnalyticsCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <AnalyticsCard title="Top Words Used">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={analytics.topWords}
                  layout="vertical"
                >
                  <XAxis type="number" />
                  <YAxis dataKey="word" type="category" width={80} />
                  <Tooltip 
                    formatter={(value: number) => [`${value} occurrences`, 'Frequency']}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                  />
                  <Bar 
                    dataKey="count" 
                    fill="hsl(var(--secondary))" 
                    radius={[0, 4, 4, 0]} 
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnalyticsCard>
          
          <AnalyticsCard title="Entries Per Weekday">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analytics.entriesPerWeekday}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value: number) => [`${value} entries`, 'Count']}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="count" 
                    stroke="hsl(var(--accent))" 
                    fill="hsl(var(--accent))" 
                    fillOpacity={0.3}
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </AnalyticsCard>
        </div>
        
        <AnalyticsCard title="Tags Usage" className="mb-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analytics.tagsUsage}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="count"
                  nameKey="tag"
                  animationDuration={1500}
                >
                  {analytics.tagsUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend layout="vertical" align="right" verticalAlign="middle" />
                <Tooltip 
                  formatter={(value: number, name: string, props: any) => [`${value} entries`, props.payload.tag]}
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsCard>
      </div>
    </Layout>
  );
};

export default AnalyticsPage;
