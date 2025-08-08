
import Profile from "../Component/Profile"
import Feed from "../Component/Feed"
function ExplorePage() {
  return (
    <>
    <div className="flex flex-col sm:flex-row bg-gray-100 min-h-screen ">
          <Profile />

          {/* showing posts */}
          <Feed />
         
    </div>
    
    </>
  )
}

export default ExplorePage