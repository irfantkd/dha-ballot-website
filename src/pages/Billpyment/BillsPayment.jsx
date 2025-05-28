import {
  CreditCard,
  LayoutGrid,
  Eye,
  FileText,
  Clock,
  DollarSign,
  Banknote,
  Download,
} from 'lucide-react';

export default function BillsPayment() {
  return (
    <>
      <div className="ms-10 mt-4 flex items-center gap-1 text-gray-700">
        /
        <CreditCard size={18} className="text-gray-500" />
        <h1 className="text-lg font-medium text-gray-500">Bills & Payment</h1>
      </div>
      <div className="mx-auto max-w-6xl bg-white p-6">
        <div className="rounded-md border border-gray-200 px-16 py-8">
          {/* Main Cards */}
          <div className="mb-8 grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Apply for Ballot Card */}
            <div className=" rounded-lg bg-gray-100 p-8 text-center transition-colors hover:bg-gray-200">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300">
                <button>
                  <LayoutGrid className="h-6 w-6" />
                </button>
              </div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                Apply for Ballot
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Fill your application for property Ballot
                <br />
                with our digital process
              </p>
            </div>

            {/* View Application Card */}
            <div className="rounded-lg bg-gray-100 p-8 text-center transition-colors hover:bg-gray-200">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300">
                <button>
                  <Eye className="h-6 w-6" />
                </button>
              </div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                View Application
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                View your application and monitor
                <br />
                the current status
              </p>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* Total Application */}
            <div className="flex items-center gap-3 rounded-lg border  bg-gray-100 p-4">
              <FileText className="h-5 w-5 text-gray-600" />
              <div>
                <div className="text-xs text-gray-500">Total application</div>
                <div className="text-xl font-bold text-gray-900">2</div>
              </div>
            </div>

            {/* Pending */}
            <div className="flex items-center gap-3 rounded-lg border  bg-gray-100 p-4">
              <Clock className="h-5 w-5 text-gray-600" />
              <div>
                <div className="text-xs text-gray-500">Pending</div>
                <div className="text-xl font-bold text-gray-900">1</div>
              </div>
            </div>

            {/* Paid */}
            <div className="flex items-center gap-3 rounded-lg border  bg-gray-100 p-4">
              <DollarSign className="h-5 w-5 text-gray-600" />
              <div>
                <div className="text-xs text-gray-500">Paid</div>
                <div className="text-xl font-bold text-gray-900">1</div>
              </div>
            </div>

            {/* Total Amount */}
            <div className="flex items-center gap-3 rounded-lg border  bg-gray-100 p-4">
              <Banknote className="h-5 w-5 text-gray-600" />
              <div>
                <div className="text-xs text-gray-500">Total amount</div>
                <div className="text-xl font-bold text-gray-900">30,000Rs</div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    #Bill
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Bill Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Due Date
                  </th>
                  <th className="px-6 py-4 text-start text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Amount Due
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    #00001
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">19-6-2025</td>
                  <td className="px-6 py-4 text-sm text-gray-700">19-6-2025</td>
                  <td className="px-6 py-4 ">
                    <div className="flex items-center gap-10">
                      <span className="inline-flex rounded-md bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                        Pending
                      </span>
                      <span className="inline-flex rounded bg-yellow-200 px-3 py-1 text-xs font-medium text-yellow-800">
                        Pay Now
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    15,000.00 Rs.
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center gap-1 rounded bg-gray-800 px-3 py-1 text-xs font-medium text-white hover:bg-gray-700">
                        Upload Voucher
                        <Download className="h-3 w-3" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    #00001
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">19-6-2025</td>
                  <td className="px-6 py-4 text-sm text-gray-700">19-6-2025</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-10">
                      <span className="inline-flex rounded-md bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                        Pending
                      </span>
                      <span className="inline-flex rounded bg-yellow-200 px-3 py-1 text-xs font-medium text-yellow-800">
                        Pay Now
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    15,000.00 Rs.
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center gap-1 rounded bg-gray-800 px-3 py-1 text-xs font-medium text-white hover:bg-gray-700">
                        Upload Voucher
                        <Download className="h-3 w-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
