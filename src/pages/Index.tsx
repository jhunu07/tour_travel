
const Index = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LuxStay - Premium Hotel Booking</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        .header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .logo {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: #667eea;
        }

        /* Hero Section */
        .hero {
            margin-top: 80px;
            padding: 4rem 0;
            text-align: center;
            color: white;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        /* Search Section */
        .search-section {
            background: white;
            margin: -2rem auto 3rem;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            max-width: 900px;
        }

        .search-form {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group label {
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #333;
        }

        .form-group input,
        .form-group select {
            padding: 0.8rem;
            border: 2px solid #e1e5e9;
            border-radius: 10px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #667eea;
        }

        .search-btn {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.3s ease;
            grid-column: 1 / -1;
            margin-top: 1rem;
        }

        .search-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        /* Filters */
        .filters {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .filter-btn {
            padding: 0.5rem 1rem;
            border: 2px solid #e1e5e9;
            background: white;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .filter-btn.active,
        .filter-btn:hover {
            border-color: #667eea;
            background: #667eea;
            color: white;
        }

        /* Hotels Grid */
        .hotels-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .hotel-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }

        .hotel-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .hotel-image {
            height: 250px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            position: relative;
            overflow: hidden;
        }

        .hotel-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .price-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.9);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 700;
            color: #333;
        }

        .hotel-info {
            padding: 1.5rem;
        }

        .hotel-name {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #333;
        }

        .hotel-location {
            color: #666;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .hotel-rating {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .stars {
            color: #ffc107;
        }

        .hotel-amenities {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .amenity {
            background: #f8f9fa;
            padding: 0.2rem 0.5rem;
            border-radius: 10px;
            font-size: 0.8rem;
            color: #666;
        }

        .book-btn {
            width: 100%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 0.8rem;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .book-btn:hover {
            transform: translateY(-2px);
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
        }

        .modal-content {
            background: white;
            margin: 5% auto;
            padding: 2rem;
            border-radius: 20px;
            width: 90%;
            max-width: 600px;
            position: relative;
            animation: modalSlideIn 0.3s ease;
        }

        @keyframes modalSlideIn {
            from {
                transform: translateY(-50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .close {
            position: absolute;
            right: 1rem;
            top: 1rem;
            font-size: 2rem;
            cursor: pointer;
            color: #999;
        }

        .close:hover {
            color: #333;
        }

        .booking-form {
            margin-top: 1rem;
        }

        .booking-form h3 {
            margin-bottom: 1rem;
            color: #333;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .confirm-btn {
            width: 100%;
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            border: none;
            padding: 1rem;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            font-size: 1.1rem;
            margin-top: 1rem;
        }

        .confirm-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(40, 167, 69, 0.4);
        }

        /* Loading */
        .loading {
            text-align: center;
            padding: 2rem;
            color: #666;
        }

        .spinner {
            border: 3px solid #f3f3f3;
            border-top: 3px solid #667eea;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            .search-form {
                grid-template-columns: 1fr;
            }

            .hotels-grid {
                grid-template-columns: 1fr;
            }

            .nav-links {
                display: none;
            }

            .form-row {
                grid-template-columns: 1fr;
            }
        }

        .success-message {
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            margin-top: 1rem;
            display: none;
        }
    </style>
</head>
<body>
    <header class="header">
        <nav class="nav container">
            <div class="logo">LuxStay</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#hotels">Hotels</a></li>
                <li><a href="#deals">Deals</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Find Your Perfect Stay</h1>
                <p>Discover luxury hotels and unforgettable experiences around the world</p>
            </div>
        </section>

        <section class="container">
            <div class="search-section">
                <form class="search-form" id="searchForm">
                    <div class="form-group">
                        <label for="destination">Destination</label>
                        <input type="text" id="destination" placeholder="Where are you going?" required>
                    </div>
                    <div class="form-group">
                        <label for="checkin">Check-in</label>
                        <input type="date" id="checkin" required>
                    </div>
                    <div class="form-group">
                        <label for="checkout">Check-out</label>
                        <input type="date" id="checkout" required>
                    </div>
                    <div class="form-group">
                        <label for="guests">Guests</label>
                        <select id="guests">
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5+ Guests</option>
                        </select>
                    </div>
                    <button type="submit" class="search-btn">Search Hotels</button>
                </form>

                <div class="filters">
                    <div class="filter-btn active" data-filter="all">All Hotels</div>
                    <div class="filter-btn" data-filter="luxury">Luxury</div>
                    <div class="filter-btn" data-filter="budget">Budget</div>
                    <div class="filter-btn" data-filter="business">Business</div>
                    <div class="filter-btn" data-filter="resort">Resort</div>
                </div>
            </div>

            <div id="loadingDiv" class="loading" style="display: none;">
                <div class="spinner"></div>
                <p>Searching for the best hotels...</p>
            </div>

            <div class="hotels-grid" id="hotelsGrid">
                <!-- Hotels will be dynamically loaded here -->
            </div>
        </section>
    </main>

    <!-- Booking Modal -->
    <div id="bookingModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modalHotelName">Book Your Stay</h2>
            <div class="booking-form">
                <h3>Booking Details</h3>
                <form id="bookingForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" required>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="specialRequests">Special Requests</label>
                        <textarea id="specialRequests" rows="3" style="width: 100%; padding: 0.8rem; border: 2px solid #e1e5e9; border-radius: 10px; resize: vertical;"></textarea>
                    </div>
                    <button type="submit" class="confirm-btn">Confirm Booking</button>
                </form>
                <div id="successMessage" class="success-message">
                    🎉 Booking confirmed! You'll receive a confirmation email shortly.
                </div>
            </div>
        </div>
    </div>

    <script>
        // Sample hotel data
        const hotelsData = [
            {
                id: 1,
                name: "Grand Luxury Resort",
                location: "Maldives",
                price: 450,
                rating: 4.9,
                reviews: 234,
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+R3JhbmQgTHV4dXJ5IFJlc29ydDwvdGV4dD4KPC9zdmc+",
                category: "luxury",
                amenities: ["Pool", "Spa", "WiFi", "Restaurant", "Bar"]
            },
            {
                id: 2,
                name: "City Business Hotel",
                location: "New York, USA",
                price: 220,
                rating: 4.5,
                reviews: 567,
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSkiLz4KPHR5eHQgeD0iMjAwIiB5PSIxMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DaXR5IEJ1c2luZXNzIEhvdGVsPC90ZXh0Pgo8L3N2Zz4=",
                category: "business",
                amenities: ["WiFi", "Gym", "Conference Rooms", "Restaurant"]
            },
            {
                id: 3,
                name: "Beach Paradise Resort",
                location: "Bali, Indonesia",
                price: 180,
                rating: 4.7,
                reviews: 890,
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSkiLz4KPHR5eHQgeD0iMjAwIiB5PSIxMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5CZWFjaCBQYXJhZGlzZSBSZXNvcnQ8L3RleHQ+Cjwvc3ZnPg==",
                category: "resort",
                amenities: ["Beach Access", "Pool", "Spa", "WiFi", "Water Sports"]
            },
            {
                id: 4,
                name: "Budget Inn Downtown",
                location: "Los Angeles, USA",
                price: 89,
                rating: 4.2,
                reviews: 445,
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QnVkZ2V0IElubiBEb3dudG93bjwvdGV4dD4KPC9zdmc+",
                category: "budget",
                amenities: ["WiFi", "Parking", "24/7 Front Desk"]
            },
            {
                id: 5,
                name: "Mountain Lodge Retreat",
                location: "Swiss Alps, Switzerland",
                price: 320,
                rating: 4.8,
                reviews: 156,
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TW91bnRhaW4gTG9kZ2UgUmV0cmVhdDwvdGV4dD4KPC9zdmc+",
                category: "luxury",
                amenities: ["Ski Access", "Spa", "Restaurant", "Fireplace", "WiFi"]
            },
            {
                id: 6,
                name: "Urban Boutique Hotel",
                location: "Tokyo, Japan",
                price: 195,
                rating: 4.6,
                reviews: 789,
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VXJiYW4gQm91dGlxdWUgSG90ZWw8L3RleHQ+Cjwvc3ZnPg==",
                category: "business",
                amenities: ["WiFi", "Rooftop Bar", "Gym", "Restaurant", "City Views"]
            }
        ];

        let currentFilter = 'all';
        let currentHotel = null;

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            loadHotels();
            setupEventListeners();
            setMinDate();
        });

        function setMinDate() {
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('checkin').min = today;
            document.getElementById('checkout').min = today;
            
            document.getElementById('checkin').addEventListener('change', function() {
                const checkinDate = new Date(this.value);
                const checkoutInput = document.getElementById('checkout');
                checkinDate.setDate(checkinDate.getDate() + 1);
                checkoutInput.min = checkinDate.toISOString().split('T')[0];
            });
        }

        function setupEventListeners() {
            // Search form
            document.getElementById('searchForm').addEventListener('submit', handleSearch);

            // Filter buttons
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentFilter = this.dataset.filter;
                    loadHotels();
                });
            });

            // Modal events
            const modal = document.getElementById('bookingModal');
            const closeBtn = document.querySelector('.close');
            
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.getElementById('successMessage').style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.getElementById('successMessage').style.display = 'none';
                }
            });

            // Booking form
            document.getElementById('bookingForm').addEventListener('submit', handleBooking);
        }

        function handleSearch(e) {
            e.preventDefault();
            const destination = document.getElementById('destination').value;
            const checkin = document.getElementById('checkin').value;
            const checkout = document.getElementById('checkout').value;
            const guests = document.getElementById('guests').value;

            if (!destination || !checkin || !checkout) {
                alert('Please fill in all required fields');
                return;
            }

            showLoading();
            
            // Simulate search delay
            setTimeout(() => {
                console.log('Searching for hotels...', { destination, checkin, checkout, guests });
                loadHotels();
            }, 1500);
        }

        function showLoading() {
            document.getElementById('loadingDiv').style.display = 'block';
            document.getElementById('hotelsGrid').style.display = 'none';
        }

        function hideLoading() {
            document.getElementById('loadingDiv').style.display = 'none';
            document.getElementById('hotelsGrid').style.display = 'grid';
        }

        function loadHotels() {
            hideLoading();
            
            const filteredHotels = currentFilter === 'all' 
                ? hotelsData 
                : hotelsData.filter(hotel => hotel.category === currentFilter);

            const hotelsGrid = document.getElementById('hotelsGrid');
            hotelsGrid.innerHTML = '';

            filteredHotels.forEach(hotel => {
                const hotelCard = createHotelCard(hotel);
                hotelsGrid.appendChild(hotelCard);
            });
        }

        function createHotelCard(hotel) {
            const card = document.createElement('div');
            card.className = 'hotel-card';
            
            const stars = '★'.repeat(Math.floor(hotel.rating));
            const amenitiesHtml = hotel.amenities.map(amenity => 
                '<span class="amenity">' + amenity + '</span>'
            ).join('');

            card.innerHTML = \`
                <div class="hotel-image">
                    <img src="\${hotel.image}" alt="\${hotel.name}" onerror="this.style.display='none'">
                    <div class="price-badge">$\${hotel.price}/night</div>
                </div>
                <div class="hotel-info">
                    <h3 class="hotel-name">\${hotel.name}</h3>
                    <div class="hotel-location">
                        📍 \${hotel.location}
                    </div>
                    <div class="hotel-rating">
                        <span class="stars">\${stars}</span>
                        <span>\${hotel.rating} (\${hotel.reviews} reviews)</span>
                    </div>
                    <div class="hotel-amenities">
                        \${amenitiesHtml}
                    </div>
                    <button class="book-btn" onclick="openBookingModal(\${hotel.id})">
                        Book Now
                    </button>
                </div>
            \`;

            return card;
        }

        function openBookingModal(hotelId) {
            currentHotel = hotelsData.find(hotel => hotel.id === hotelId);
            document.getElementById('modalHotelName').textContent = currentHotel.name;
            document.getElementById('bookingModal').style.display = 'block';
            document.getElementById('bookingForm').reset();
            document.getElementById('successMessage').style.display = 'none';
        }

        function handleBooking(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const bookingData = {
                hotel: currentHotel,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                specialRequests: document.getElementById('specialRequests').value,
                checkin: document.getElementById('checkin').value,
                checkout: document.getElementById('checkout').value,
                guests: document.getElementById('guests').value
            };

            console.log('Booking submitted:', bookingData);
            
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('bookingForm').style.display = 'none';
            
            // Reset form after 3 seconds
            setTimeout(() => {
                document.getElementById('bookingForm').style.display = 'block';
                document.getElementById('bookingModal').style.display = 'none';
            }, 3000);
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>
      `
    }} />
  );
};

export default Index;
