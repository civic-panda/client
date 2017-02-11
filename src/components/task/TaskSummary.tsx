import * as React from 'react';
// import { Link } from 'react-router';

import { causes, tasks } from '../../modules';
import { Link, FadeIn, Input, Text, SquareImage } from '../ui';
import './task-list.scss';

interface Props {
  cause: causes.Cause;
  task: tasks.Task;
}

export const TaskSummary = ({ task, cause }: Props) => (
  <div className="task-summary">
    <div className="task__description">
      <div className="task__title-block">
        <div className="task__title">
          <Text
            className="task-name"
            text={task.name}
            size={'h2'}
            type={'header'}
          />
        </div>
        <Link
          link={`/tasks/${task.id}`}
          text={'Take Action'}
        />
      </div>
      <Text size={'small'} displayBlock bottomMargin>
        <Text
          text={cause.name}
          size={'small'}
          color={'light'}
          type={'label'}
        />
        &nbsp;
        &nbsp;
        <Text
          text={typeof task.duration === 'string' ? task.duration : `${task.duration} mins`}
          size={'small'}
          type={'label'}
        />
      </Text>
      <Text
        text={task.summary}
        size={'p'}
        displayBlock
      />
    </div>
    <SquareImage
      url={(task.image && task.image.secure_url) || cause.heroImage.secure_url}
      size={'med'}
    />
  </div>
);

  export default TaskSummary;
