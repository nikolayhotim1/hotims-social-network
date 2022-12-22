import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    const activateEditMode = () => {
        props.isOwner && setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.getUpdateStatus(status);
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    return (
        <div>
            {!editMode &&
                <div>
                    <i onDoubleClick={activateEditMode}>
                        {props.status || 'My status will be here'}
                    </i>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                    />
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;