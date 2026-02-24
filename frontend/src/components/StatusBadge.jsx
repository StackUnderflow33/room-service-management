export default function StatusBadge({ status }) {
  const getColor = () => {
    switch (status) {
      case "PENDING": return "warning";
      case "IN_PROGRESS": return "primary";
      case "COMPLETED": return "success";
      default: return "secondary";
    }
  };

  return (
    <span className={`badge bg-${getColor()}`}>
      {status}
    </span>
  );
}