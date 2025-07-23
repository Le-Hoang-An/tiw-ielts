import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Chart() {
  const data = [
    { name: "Có mặt", value: 10 },
    { name: "Vắng không phép", value: 2 },
    { name: "Vắng có phép", value: 1 },
    { name: "Đi trễ", value: 2 },
    { name: "Đi trễ hơn 20 phút", value: 1 },
    { name: "Về sớm", value: 4 },
  ];

  const COLORS = [
    "#4ade80",
    "#f87171",
    "#facc15",
    "#f472b6",
    "#fb923c",
    "#c084fc",
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Chart;
