"use client";
export const defualtBtnClass = `px-4 py-2 rounded-md text-lg cursor-pointer duration-100 hover:opacity-80`;
export const BASE_Header : {"Content-Type": string} = { "Content-Type": "application/json" }
export default function TestReq() {
  const BASE_URL = "http://localhost:3000/api/testReq";

  const handleReqGET = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log("GET:", data);
  };

  const handleReqPOST = async () => {
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: BASE_Header,
        body: JSON.stringify({ title: "this is new test title" }),
      });

      // خطاها رو بهتر لاگ کن
      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: "no json" }));
        console.error("POST error:", res.status, err);
        return;
      }

      const data = await res.json();
      console.log("POST:", data);
    } catch (e) {
      console.error("fetch failed:", e);
    }
  };

  return (
    <div className="fullCCenter ">
      <div className="flex gap-2 mt-6">
        <button className={`${defualtBtnClass} bg-emerald-500`} onClick={handleReqGET}>
          GET
        </button>
        <button className={`${defualtBtnClass} bg-sky-500`} onClick={handleReqPOST}>
          POST
        </button>
      </div>
    </div>
  );
}
