export default function ProfileIcon({ name }: { name: string }) {
    return (
        <div>
            <p className="text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center">{name}</p>
        </div>
    );
}