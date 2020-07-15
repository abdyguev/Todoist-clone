import React from 'react';
import { firebase } from '../firebase'


export const Checkbox = ({ id }) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true,
            });
    };

    return (
        <div className="checkbox-holder"
            data-testid="checkbox-action"
            onCLick={() => archiveTask()}
        >
            <span className="checkbox" />
        </div>
    )
} 