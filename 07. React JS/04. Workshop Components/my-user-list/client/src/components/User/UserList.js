import { useEffect, useState } from "react";
import {
  create,
  deleteById,
  edit,
  getAll,
  getOne,
} from "../../services/userServices";
import { CreateUser } from "./CreateUser";
import { DeleteUser } from "./DeleteUser";
import { EditUser } from "./EditUser";
import { DetailUser } from "./DetailsUser";
import { UserItem } from "./UserItem";
import { UserActions } from "./UserListConstant";

export const UserList = () => {
  const [users, setUser] = useState([]);
  const [userAction, setUserAction] = useState({ user: null, action: null });

  useEffect(() => {
    getAll().then((users) => setUser(users));
  }, []);

  const userActionClickHandler = (userId, actionType) => {
    getOne(userId).then((user) => {
      setUserAction({
        user,
        action: actionType,
      });
    });
  };

  const closeHandler = () => {
    setUserAction({ user: null, action: null });
  };

  const userCreatehandler = (userData) => {
    create(userData)
      .then((u) => {
        setUser((oldU) => [...oldU, u]);
        closeHandler();
      })
      .catch((err) => console.log(err));
  };

  function userDeleteHanlder(userId) {
    deleteById(userId).then((user) => {
      setUser((oldU) => [...oldU.filter((u) => u._id !== userId)]);
      closeHandler();
    });
  }

  function userEditHandler(userData, userId) {
    edit(userData, userId).then((user) => {
      setUser((oldUsers) => [
        ...oldUsers.map((u) => (u._id !== userId ? u : user)),
      ]);
      closeHandler();
    });
  }

  return (
    <div className="table-wrapper">
      {userAction.action === UserActions.Details && (
        <DetailUser user={userAction.user} onClose={closeHandler} />
      )}

      {userAction.action === UserActions.Delete && (
        <DeleteUser
          user={userAction.user}
          onClose={closeHandler}
          userDeleteHanlder={() => userDeleteHanlder(userAction.user._id)}
        />
      )}

      {userAction.action === UserActions.Edit && (
        <EditUser
          user={userAction.user}
          onClose={closeHandler}
          userEditHandler={userEditHandler}
        />
      )}

      {userAction.action === UserActions.Add && (
        <CreateUser onClose={closeHandler} onUserCreate={userCreatehandler} />
      )}

      {/* {userAction.action === USER_ACTIONS.edit && <UserEdit closeHanlder={closeHandler} user={userAction.user} editUserHanlder={editUserHandler} />} */}

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>
              First name
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Last name
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Email
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Phone
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Created
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- Table row component --> */}

          {users.map((user) => (
            <tr key={user._id}>
              <UserItem user={user} onActionClick={userActionClickHandler} />
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="btn-add btn"
        onClick={() => userActionClickHandler(null, UserActions.Add)}
      >
        Add new user
      </button>
    </div>
  );
};
