export default function TitleCapsule({ title }: { title: string }) {
    return (
        <div>
            <p className="text-blue-600 text-[0.75rem] bg-blue-100 rounded-xl px-2  w-fit">{title}</p>
        </div>
    );
}