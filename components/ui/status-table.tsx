"use client"

import * as React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type PointsActivity = {
  description: string
  date: string
  points: number
}

const defaultData: PointsActivity[] = [
  {
    description: 'SFO-NYC',
    date: '2024-09-15',
    points: 500
  },
  {
    description: 'Hotel Stay',
    date: '2024-09-10',
    points: 300
  },
  {
    description: 'Car Rental',
    date: '2024-09-05',
    points: 400
  },
]

const columnHelper = createColumnHelper<PointsActivity>()

const columns = [
  columnHelper.accessor('description', {
    header: () => "Description",
    cell: info => info.getValue()
  }),
  columnHelper.accessor(row => row.date, {
    id: 'date',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Date</span>
  }),
  columnHelper.accessor('points', {
    header: () => 'Points',
    cell: info => info.renderValue()
  })
]

const StatusTable: React.FC = () => {
  const [data, _setData] = React.useState(() => [...defaultData])
  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
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
  )
}

export default StatusTable