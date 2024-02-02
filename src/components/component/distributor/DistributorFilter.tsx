export default function DistributorFilter() {
  return (
    <div className="flex flex-col px-6 py-4 bg-white shadow dark:bg-gray-800">
        <h1 className="text-xl font-bold my-2">Filter</h1>
        <div className="flex justify-between">
            <select id="dropdown" className="border-2 border-black w-80">
                <option value="">Crop</option>
                <option value="option1" className="py-3 my-5">Wheat</option>
                <option value="option2">Rice</option>
                <option value="option3">Mango</option>
            </select>
            <select id="dropdown" className="border-2 border-black w-80">
                <option value="">Location</option>
                <option value="option1" className="py-3 my-5">Wheat</option>
                <option value="option2">Rice</option>
                <option value="option3">Mango</option>
            </select>
            <select id="dropdown" className="border-2 border-black w-80">
                <option value="">Price Range</option>
                <option value="option1" className="py-3 my-5">Wheat</option>
                <option value="option2">Rice</option>
                <option value="option3">Mango</option>
            </select>
            <select id="dropdown" className="border-2 border-black w-80">
                <option value="">Amount</option>
                <option value="option1" className="py-3 my-5">Wheat</option>
                <option value="option2">Rice</option>
                <option value="option3">Mango</option>
            </select>
        </div>
    </div>
  );
}
