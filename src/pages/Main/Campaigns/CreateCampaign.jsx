import { useState } from "react"
import { ArrowLeft, Plus, ImageIcon } from "lucide-react"

export default function CreateCampaign() {
  const [formData, setFormData] = useState({
    campaignTitle: "",
    brandName: "",
    campaignType: "",
    budget: "",
    campaignDuration: "",
    contentType: "",
    payoutDeadline: "",
    views: "",
    likes: "",
    shares: "",
  })

  const [selectedImage, setSelectedImage] = useState(null)
  const [customFields, setCustomFields] = useState([])
  const [metricFields, setMetricFields] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0])
    }
  }

  const addCustomField = () => {
    setCustomFields((prev) => [...prev, { id: `custom-${Date.now()}`, value: "" }])
  }

  const addMetricField = () => {
    setMetricFields((prev) => [...prev, { id: `metric-${Date.now()}`, value: "" }])
  }

  const updateCustomField = (id, value) => {
    setCustomFields((prev) => prev.map((field) => (field.id === id ? { ...field, value } : field)))
  }

  const updateMetricField = (id, value) => {
    setMetricFields((prev) => prev.map((field) => (field.id === id ? { ...field, value } : field)))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { formData, customFields, metricFields, selectedImage })
    // You could add form validation and submission logic here
  }

  return (
    <div className=" text-gray-300 ">
      <div className="w-full ">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button className="mr-2 p-1 hover:text-white">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-medium text-white">Create New Campaign</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Campaign Details */}
            <div className="space-y-4 bg-[#19262b] p-4 px-9 border border-[#495559] rounded-lg">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="campaignTitle"
                    value={formData.campaignTitle}
                    onChange={handleInputChange}
                    placeholder="Campaign Title"
                    className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleInputChange}
                    placeholder="Brand Name"
                    className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                  />
                </div>

                <div className="relative">
                  <div className="flex justify-between items-center w-full bg-[#19262b] border-b border-gray-700 p-3">
                    <span className={`${selectedImage ? "text-white" : "text-gray-500"}`}>
                      {selectedImage ? selectedImage.name : "Select a Picture"}
                    </span>
                    <label htmlFor="picture-upload" className="cursor-pointer text-red-500">
                      <ImageIcon size={20} className="text-[#EF4444]"/>
                    </label>
                    <input
                      id="picture-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="hidden"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="campaignType"
                    value={formData.campaignType}
                    onChange={handleInputChange}
                    placeholder="Campaign Type"
                    className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Budget"
                    className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="campaignDuration"
                    value={formData.campaignDuration}
                    onChange={handleInputChange}
                    placeholder="Campaign Duration"
                    className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="contentType"
                    value={formData.contentType}
                    onChange={handleInputChange}
                    placeholder="Content Type"
                    className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="payoutDeadline"
                    value={formData.payoutDeadline}
                    onChange={handleInputChange}
                    placeholder="Payout Deadline"
                    className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                  />
                </div>

                {customFields.map((field) => (
                  <div key={field.id}>
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) => updateCustomField(field.id, e.target.value)}
                      placeholder="Custom Field"
                      className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addCustomField}
                className="flex items-center text-sm text-[#EF4444] hover:text-red-400"
              >
                <Plus size={16} className="mr-1" />
                Add New Field
              </button>
            </div>

            {/* Right Column - Expected Metrics */}
            <div>
              <div className="bg-[#19262b]  p-6 border-[#495559] rounded-lg">
                <h2 className="text-white text-lg mb-4">Expected Metrics</h2>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="views"
                      value={formData.views}
                      onChange={handleInputChange}
                      placeholder="Views"
                      className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="likes"
                      value={formData.likes}
                      onChange={handleInputChange}
                      placeholder="Likes"
                      className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="shares"
                      value={formData.shares}
                      onChange={handleInputChange}
                      placeholder="Shares"
                      className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                    />
                  </div>

                  {metricFields.map((field) => (
                    <div key={field.id}>
                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) => updateMetricField(field.id, e.target.value)}
                        placeholder="Custom Metric"
                        className="w-full bg-[#19262b] border-b border-gray-700 p-3 focus:outline-none focus:border-gray-500"
                      />
                    </div>
                  ))}

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={addMetricField}
                      className="flex items-center text-sm text-[#DC2626] hover:text-red-400"
                    >
                      <Plus size={16} className="mr-1" />
                      Add New Field
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#DC2626] hover:bg-red-700 text-white py-3 rounded mt-6 transition duration-200"
                >
                  Launch Campaign
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}