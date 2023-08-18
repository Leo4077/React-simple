function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const users = [{
    id: 1,
    firstName: 'Candy',
    lastName: 'Wang',
    description: '前端工程師',
    avatar: 'https://i.pravatar.cc/300?img=31'
}, {
    id: 2,
    firstName: 'Josephine',
    lastName: 'James',
    description: 'UI / UX 設計師',
    avatar: 'https://i.pravatar.cc/300?img=32'
}, {
    id: 3,
    firstName: 'Glen',
    lastName: 'Castillo',
    description: '後端工程師',
    avatar: 'https://i.pravatar.cc/300?img=33'
}];

const userList =
    <ul class="list">
        {users.map(user => (
            <li key={user.id}>
                <div class="card">
                    <img src={user.avatar} alt={formatName(user)} />
                    <div class="content">
                        <h3><b>{formatName(user)}</b></h3>
                        <p>{user.description}</p>
                    </div>
                </div>
            </li>
        ))}
    </ul>;
