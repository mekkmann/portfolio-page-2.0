type Props = {
    status?: "live" | "wip" | "code";
};

export function StatusBadge({ status }: Props) {
    if (!status) return null;

    const styles = {
        wip: "text-red-600 bg-red-100",
        code: "text-amber-600 bg-amber-100",
        live: "text-green-600 bg-green-100",
    };

    return (
        <span
            className={`ml-2 text-xs font-medium px-2 py-0.5 rounded ${styles[status]}`}
        >
            {status.toUpperCase()}
        </span>
    )
};
