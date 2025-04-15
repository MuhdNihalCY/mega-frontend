import List from './List';

const Group = ({ group, isIndividual = false }) => {
  return (
    <div className="flex-shrink-0 w-72 bg-gray-50 rounded-lg shadow">
      <div className="p-3 bg-blue-100 rounded-t-lg">
        <h3 className="font-semibold text-gray-800">{group.title}</h3>
      </div>
      
      <div className="p-2">
        {isIndividual ? (
          <List list={group} />
        ) : (
          Object.entries(group.subLists).map(([key, subList]) => (
            <div key={key} className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2 px-2">
                {subList.title}
                {subList.title === '> 7 Days' && (
                  <button className="ml-2 text-xs text-blue-600 hover:text-blue-800">
                    Search
                  </button>
                )}
              </h4>
              <List list={subList} disableDnd={subList.disableDnd} />
            </div>
          ))
        )}
        
        {isIndividual && group.title === 'Orders' && (
          <button className="w-full mt-2 px-3 py-1 bg-green-100 text-green-800 rounded text-sm hover:bg-green-200">
            + Add Card
          </button>
        )}
      </div>
    </div>
  );
};

export default Group;