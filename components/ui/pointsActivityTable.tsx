"use client"

import * as React from 'react'
import { PointsActivityDisplayData } from '@/lib/types/PointsActivity'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

const columnHelper = createColumnHelper<PointsActivityDisplayData>()

const columns = [
  columnHelper.accessor('description', {
    header: () => "Description",
    cell: info => info.getValue()
  }),
  columnHelper.accessor(row => row.date, {
    id: 'date',
    cell: info => info.getValue(),
    header: () => <span>Date</span>
  }),
  columnHelper.accessor('points', {
    header: () => 'Points',
    cell: info => <div style={{ textAlign: 'right' }}>{info.renderValue()?.toLocaleString()}</div>
  })
]

const PointsActivityTable: React.FC<{ activityData: PointsActivityDisplayData[] }> = ({ activityData }) => {
  const [data, _setData] = React.useState(() => [...activityData])
  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="p-2">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="border border-gray-200 px-4 py-2 text-left">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="even:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="border border-gray-200 px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="h-4" />
      </div>
    </React.Suspense>
  )
}

export default PointsActivityTable