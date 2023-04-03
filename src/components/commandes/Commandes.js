import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  deleteCommand,
  getAllCommandes,
  updateCommand,
} from "../../actions/commandes"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
function Commandes() {
  const [showOneCommand, setShowOneCommand] = useState("")
  const commandes = useSelector(state => state.AllCommandes.commandes)

  const dispatch = useDispatch()
  // useEffect(() => {
  //   let restaurantId = JSON.parse(localStorage.getItem("restaurant"))?.result
  //     ?.userRestaurant?._id
  //   getAllCommandes(dispatch, restaurantId)
  // }, [])
  function Accepter(update) {
    console.log("fait")
    updateCommand(dispatch, update.restaurantId, update.postCommand)
  }
  return (
    <div className="bg-black">
      <div className="flex justify-center bg-gray-300 rounded ml-6 absolute w-11/12 h-5/6">
        <div className="mt-10 w-4/5 h-16">
          {commandes?.map(item => (
            <>
              <div
                key={item._id}
                className={`bg-black mb-4 h-full flex flex-row-reverse justify-around items-center rounded`}
              >
                <div className="space-x-2  flex justify-end">
                  {item?.status !== "Refusée" && (
                    <button
                      onClick={() =>
                        updateCommand(dispatch, item.restaurantId, {
                          commandId: item._id,
                          status: "Acceptée",
                        })
                      }
                      className="font-bold text-sm p-2  bg-gray-300 rounded"
                    >
                      {item?.status === "Acceptée" ? "En cours" : "Accepter"}
                    </button>
                  )}
                  {item?.status === "Refusée" && (
                    <button
                      onClick={() =>
                        deleteCommand(dispatch, item.restaurantId, {
                          commandId: item._id,
                        })
                      }
                      className="font-bold text-sm p-2  bg-gray-300 rounded"
                    >
                      Supprimer
                    </button>
                  )}

                  <button
                    onClick={() =>
                      updateCommand(dispatch, item.restaurantId, {
                        commandId: item._id,
                        status: "Refusée",
                      })
                    }
                    className="text-white font-bold text-sm p-2 bg-orange-500 rounded"
                  >
                    {item?.status === "Refusée"
                      ? "Commande refusée"
                      : "Refuser"}
                  </button>
                </div>
                <div className="mt-2 ">
                  <h1 className="text-white mt-2">Details</h1>
                  <ChevronDownIcon
                    onClick={
                      !showOneCommand
                        ? () => setShowOneCommand(item._id)
                        : () => setShowOneCommand()
                    }
                    className="h-8 w-12 text-orange-500 cursor-pointer"
                  />
                </div>
                <div className="text-center w-1/6 flex flex-row-reverse justify-end items-center ">
                  <h1 className="text-white">{item?.clientName}</h1>

                  <div className="text-center ">
                    <img
                      className="mr-1 w-12 h-12 rounded-full"
                      src={item?.clientImage}
                      alt="al"
                    />
                  </div>
                </div>
              </div>
              {showOneCommand === item?._id && (
                <div className="flex justify-center z-50 ">
                  {item.commandes.map(subItem => (
                    <div
                      id={commandes.indexOf(subItem)}
                      className="bg-orange-500  mb-2 rounded-b text-center w-1/2"
                    >
                      <div className="flex mt-2 flex-row-reverse items-center justify-center mr-10">
                        <h1 className="text-lg font-semibold">
                          Nom du plat : {subItem.platName}
                        </h1>
                        <img
                          className=" rounded-full h-16 w-16 p-2 "
                          src={subItem.PlatImage}
                          alt=""
                        />
                      </div>

                      <h1>Nombre de plats : {subItem.number}</h1>
                      <h1 className="font-extrabold">
                        {" "}
                        Prix total : {subItem.total} Euro
                      </h1>
                    </div>
                  ))}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Commandes
