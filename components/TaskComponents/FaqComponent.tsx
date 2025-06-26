"use client";
import { useState } from "react";
import { FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FaqComponent = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      id: "1",
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging",
    },
    {
      id: "2",
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days.",
    },
  ]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleAddFAQ = (e: React.FormEvent) => {
    e.preventDefault();

    if (newQuestion.trim() && newAnswer.trim()) {
      const newFAQ: FAQItem = {
        id: Date.now().toString(),
        question: newQuestion.trim(),
        answer: newAnswer.trim(),
      };

      setFaqItems([...faqItems, newFAQ]);
      setNewQuestion("");
      setNewAnswer("");
      setShowForm(false);
    }
  };

  const toggleItem = (id: any) => {
    setOpenItems((prevOpenItem) => (prevOpenItem === id ? null : id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="inline-flex items-center justify-center rounded-md text-sm  bg-black text-white h-9 px-3"
      >
        Add
        <FaPlus className="h-4 w-4 ml-2" />
      </button>
      {showForm && (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="border-b border-gray-200 p-3">
            <h2 className="text-xl font-semibold text-gray-900">Add FAQ</h2>
          </div>
          <div className="p-6">
            <form onSubmit={handleAddFAQ} className="space-y-4">
              <div className="space-y-2">
                <input
                  id="question"
                  type="text"
                  placeholder="Enter your question"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                />
              </div>

              <div className="space-y-2">
                <textarea
                  id="answer"
                  placeholder="Enter the answer"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  rows={4}
                  required
                  className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                />
              </div>

              <div className="flex justify-center items-center gap-6 pt-2">
                <button
                  type="submit"
                  className="bg-black text-white rounded-lg h-10 px-6 py-2"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setNewQuestion("");
                    setNewAnswer("");
                  }}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 h-10 px-4 py-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">FAQ Items</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <div key={item.id} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 focus:outline-none rounded-lg"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                  {openItems.includes(item.id) ? (
                    <FaChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(item.id) && (
                  <div className="px-4 pb-4">
                    <div className="pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqComponent;
