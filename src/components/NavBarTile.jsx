const Navbar = () => {
  return (
    <div className="tile nav-tile">
      <ul className="nav-list">
        <li className="nav-item active"><img src='/assets/home.svg' /> Home</li>
        <li className="nav-item"><img src='/assets/notification.svg' /> Notifications</li>
        <li className="nav-item"><img src='/assets/heart-2.svg' /> Shop</li>
        <li className="nav-item"><img src='/assets/message.svg' /> Conversation</li>
        <li className="nav-item"><img src='/assets/message-1.svg' /> Wallet</li>
        <li className="nav-item"><img src='/assets/favorite.svg' /> Subscription</li>
        <li className="nav-item"><img src='/assets/profile.svg' /> My Profile</li>
        <li className="nav-item"><img src='/assets/setting.svg' /> Settings</li>
      </ul>
      <li className="nav-item logout"><img src='/assets/logout.svg' /> Log out</li>
    </div>
  );
};

export default Navbar;