
import Profile from "../Component/Profile"
import Feed from "../Component/Feed"
function ExplorePage() {
  return (
    <>
    <div className="flex  bg-gray-100">
          <Profile />

          {/* showing posts */}
          <Feed />
         
    </div>
    
    </>
  )
}

export default ExplorePage