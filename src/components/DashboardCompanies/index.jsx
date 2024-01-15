import React from "react";
import { SiChakraui } from "react-icons/si";

import { MdOutlineDownloadDone } from "react-icons/md";
import { FaAutoprefixer } from "react-icons/fa";

import { FaMobileScreenButton } from "react-icons/fa6";

const DashboardCompanies = () => {
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 border-t-2">
        <thead className="bg-gray-50 text-2xl">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Şirkət
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Büdcə
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Vəziyyət
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tamamlama
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 font-semibold flex items-center gap-2">
                <span>
                  <SiChakraui />
                </span>{" "}
                Kiçik və orta biznes inkişaf fondu
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">$14.000</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Işləyir
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">60/100</div>
            </td>
          </tr>
        </tbody>
        <tbody className="bg-white divide-y divide-gray-200 ">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 font-semibold flex items-center gap-2">
                <span>
                  <MdOutlineDownloadDone />
                </span>{" "}
                Reklam tərəqqi sistemi
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">$3.000</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Ləğv olundu
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">10/100</div>
            </td>
          </tr>
        </tbody>
        <tbody className="bg-white divide-y divide-gray-200 ">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 font-semibold flex items-center gap-2">
                <span>
                  <FaAutoprefixer />
                </span>{" "}
                Platform xətalarının bərpası
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">-</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Tamamlandı
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">100/100</div>
            </td>
          </tr>
        </tbody>
        <tbody className="bg-white divide-y divide-gray-200 ">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 font-semibold flex items-center gap-2">
                <span>
                  <FaMobileScreenButton />
                </span>{" "}
                Mobil tətbiqlərin uyğunlaşdırılması
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">$32.000</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Tamamlandı
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">100/100</div>
            </td>
          </tr>
          {/* Diğer satırları buraya ekleyin */}
        </tbody>
      </table>
    </>
  );
};

export default DashboardCompanies;
