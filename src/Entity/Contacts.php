<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContactsRepository;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      paginationEnabled=false,
 *     normalizationContext={"groups"={"contacts:read"}},
 *     denormalizationContext={"groups"={"contacts:write"}},
 *       collectionOperations={
 *     "get",
 *     "post"
 *     },
 *
 *     itemOperations={
 *         "get",
 *         "put",
 *        "delete",
 *
 *     }
 * )
 * @ApiFilter(OrderFilter::class, properties={"lastName","birthDate"
 * ,"firstName","nationality","missions"})
 * @ORM\Entity(repositoryClass=ContactsRepository::class)
 */
class Contacts
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"contacts:read","missions:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"contacts:read","contacts:write","missions:read"})
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"contacts:read","contacts:write","missions:read"})
     */
    private $firstName;

    /**
     * @ORM\Column(type="date")
     * @Groups({"contacts:read","contacts:write","missions:read"})
     */
    private $birthDate;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"contacts:read","contacts:write","missions:read"})
     */
    private $codeName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"contacts:read","contacts:write","missions:read"})
     */
    private $nationality;

    /**
     * @ORM\ManyToMany(targetEntity=Missions::class, inversedBy="contacts")
     */
    private $contactMissions;



    public function __construct()
    {
        $this->missionContact = new ArrayCollection();
        $this->contactMissions = new ArrayCollection();
    }



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->birthDate;
    }

    public function setBirthDate(\DateTimeInterface $birthDate): self
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    public function getCodeName(): ?string
    {
        return $this->codeName;
    }

    public function setCodeName(string $codeName): self
    {
        $this->codeName = $codeName;

        return $this;
    }

    public function getNationality(): ?string
    {
        return $this->nationality;
    }

    public function setNationality(string $nationality): self
    {
        $this->nationality = $nationality;

        return $this;
    }

    /**
     * @return Collection|Missions[]
     */
    public function getContactMissions(): Collection
    {
        return $this->contactMissions;
    }

    public function addContactMission(Missions $contactMission): self
    {
        if (!$this->contactMissions->contains($contactMission)) {
            $this->contactMissions[] = $contactMission;
        }

        return $this;
    }

    public function removeContactMission(Missions $contactMission): self
    {
        $this->contactMissions->removeElement($contactMission);

        return $this;
    }


}
