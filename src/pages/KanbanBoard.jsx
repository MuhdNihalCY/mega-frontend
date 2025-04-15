import { useState } from 'react';
import BoardHeader from '../components/Kanban/BoardHeader';
import Group from '../components/Kanban/Group';
import CustomerForm from '../components/Kanban/CustomerForm';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const KanbanBoard = () => {
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [searchMode, setSearchMode] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data structure
  const [groups, setGroups] = useState({
    orders: {
      title: 'Orders',
      type: 'individual',
      cards: []
    },
    office: {
      title: 'Office',
      type: 'individual',
      cards: []
    },
    production: {
      title: 'Production',
      type: 'group',
      subLists: {
        staff1: { title: 'Staff 1', cards: [] },
        staff2: { title: 'Staff 2', cards: [] }
      }
    },
    ready: {
      title: 'Ready',
      type: 'group',
      subLists: {
        dispatch: { title: 'For Dispatch', cards: [] },
        collection: { title: 'For Customer Collection', cards: [] }
      }
    },
    drivers: {
      title: 'Drivers',
      type: 'group',
      subLists: {
        driver1: { title: 'Driver 1', cards: [] },
        driver2: { title: 'Driver 2', cards: [] }
      }
    },
    done: {
      title: 'Done',
      type: 'group',
      subLists: {
        today: { title: 'Done Today', cards: [], disableDnd: false },
        less7: { title: '< 7 Days', cards: [], disableDnd: true },
        more7: { title: '> 7 Days', cards: [], disableDnd: true }
      }
    }
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-100">
        <BoardHeader 
          onAddCustomer={() => setShowCustomerForm(true)}
          searchMode={searchMode}
          setSearchMode={setSearchMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <div className="container mx-auto px-4 py-6">
          <div className="flex overflow-x-auto pb-4 space-x-4">
            {/* Individual Lists */}
            <Group group={groups.orders} isIndividual />
            <Group group={groups.office} isIndividual />
            
            {/* Grouped Lists */}
            <Group group={groups.production} />
            <Group group={groups.ready} />
            <Group group={groups.drivers} />
            <Group group={groups.done} />
          </div>
        </div>

        {showCustomerForm && (
          <CustomerForm onClose={() => setShowCustomerForm(false)} />
        )}
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;