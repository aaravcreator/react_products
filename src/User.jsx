const User = ({ user }) => {
    return (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src={user.image} alt={`${user.firstName} ${user.lastName}`} />
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="text-xl leading-tight">{user.firstName} {user.lastName}</p>
            <p className="text-sm leading-tight text-gray-600">@{user.username}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-600"><strong>Email:</strong> {user.email}</p>
              <p className="text-sm text-gray-600"><strong>Phone:</strong> {user.phone}</p>
              <p className="text-sm text-gray-600"><strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}</p>
              <p className="text-sm text-gray-600"><strong>Company:</strong> {user.company.name} - {user.company.title}</p>
              <p className="text-sm text-gray-600"><strong>University:</strong> {user.university}</p>
              <p className="text-sm text-gray-600"><strong>Crypto:</strong> {user.crypto.coin} - {user.crypto.wallet}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default User;