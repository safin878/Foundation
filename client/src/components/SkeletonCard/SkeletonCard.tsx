function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse border border-gray-100">
      <div className="h-64 bg-gray-200 w-full" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-10 bg-gray-100 rounded w-full mt-4" />
      </div>
    </div>
  );
}

export default SkeletonCard;
