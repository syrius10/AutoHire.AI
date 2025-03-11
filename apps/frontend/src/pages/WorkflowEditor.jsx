import { useState } from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";
import PropTypes from 'prop-types';

const stages = [
  "Screening",
  "Technical Interview",
  "HR Interview",
  "Offer",
  "Hired",
];

const WorkflowEditor = () => {
  const [workflow, setWorkflow] = useState(stages);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const newWorkflow = [...workflow];
      const oldIndex = workflow.indexOf(active.id);
      const newIndex = workflow.indexOf(over.id);
      newWorkflow.splice(oldIndex, 1);
      newWorkflow.splice(newIndex, 0, active.id);
      setWorkflow(newWorkflow);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Customize Your Hiring Workflow</h2>
      <DndContext onDragEnd={handleDragEnd}>
        {workflow.map((stage) => (
          <DraggableStage key={stage} id={stage} />
        ))}
      </DndContext>
    </div>
  );
};

const DraggableStage = ({ id }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="border p-2 mt-2 bg-gray-200 cursor-pointer"
    >
      {id}
    </div>
  );
};
DraggableStage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default WorkflowEditor;
