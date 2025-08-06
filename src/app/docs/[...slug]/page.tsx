import React from "react";

interface ISubDocument {
  params: Promise<{ slug: string[] }>;
}

const SubDocument = async ({ params }: ISubDocument) => {
  const { slug } = (await params);

  if (slug.length) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">sub docs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {slug.map((item: string) => (
            <div
              key={item}
              className="bg-white shadow-md rounded-xl p-4 border border-gray-100 hover:shadow-lg transition"
            >
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-64 text-gray-500 text-lg">
      مسیر اصلی SubDocument هیچ زیرمستندی ندارد.
    </div>
  );
};

export default SubDocument;
