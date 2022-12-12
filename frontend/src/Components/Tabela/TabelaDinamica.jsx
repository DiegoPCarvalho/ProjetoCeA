import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Main from '../Template/Main';

const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Director',
      selector: 'director',
      sortable: true,
    },
    {
      name: 'Genres',
      selector: 'genres',
      sortable: true,
      cell: d => <span>{d.genres.join(', ')}</span>,
    },
    {
      name: 'Year',
      selector: 'year',
      sortable: true,
    },
  ];


  const data = [
    {
      title: 'Beetlejuice',
      year: '1988',
      genres: [
        'Comedy',
        'Fantasy',
      ],
      director: 'Tim Burton',
    },
    {
      id: 2,
      title: 'The Cotton Club',
      year: '1984',
      runtime: '127',
      genres: [
        'Crime',
        'Drama',
        'Music',
      ],
      director: 'Francis Ford Coppola',
    }];

function App() {
  const tableData = {
    columns,
    data,
  };

  return (
    <Main>
        <div className='border'>
    <DataTableExtensions
      {...tableData}
    >
        
      <DataTable
        fixedHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover 
      />
     
    </DataTableExtensions>
    </div>
    </Main>
  );
}

export default App;
