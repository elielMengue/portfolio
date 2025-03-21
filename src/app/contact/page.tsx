"use client";


export default function Page() {
    return (
        <div className="flex items-center justify-center p-4">
             <div className="bg-tertiary max-w-2xl w-full rounded-2xl p-8 relative border-b border-r border-gray-400">
                 
                 <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
                     EM
                </div>
            <div>
            <h2 className="text-gray-800 text-2xl">Connect with Me</h2>
            <p className="text-sm text-gray-500">Responds in about 2 hours</p>
          </div>
        </div>
        <div className="mt-6">
          <label className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <input type="checkbox" className="accent-black" defaultChecked />
            I am interested in working with You
          </label>
        </div>
        <div className="mt-6">
          <label className="block text-lg text-gray-800 font-bold  mb-2">Project Details *</label>
          <textarea
            className="w-full border rounded-lg p-3 text-sm focus:ring focus:ring-black/20"
            rows={4}
            placeholder="Please describe your project, including any specific design requirements, timelines, and goals."
          ></textarea>
        </div>
        <div className="mt-6">
          <label className="block text-lg text-gray-800 font-bold mb-2">Target Date *</label>
          <select className="w-full border rounded-lg p-3 text-sm focus:ring focus:ring-black/20">
            <option>Please select...</option>
          </select>
        </div>
        <div className="mt-6">
          <label className="block text-lg text-gray-800 font-bold mb-2">Project Budget *</label>
          <div className="flex items-center border rounded-lg p-3">
            <span className="text-gray-500">$</span>
            <input
              type="number"
              className="w-full outline-none text-sm ml-2"
              placeholder="Enter amount"
            />
          </div>
        </div>
        <button className="mt-8 w-full bg-primary text-white py-3 rounded-lg text-sm font-semibold hover:bg-pink-600">
          Send Message
        </button>
      </div>
    </div>
    );
}