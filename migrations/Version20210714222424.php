<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210714222424 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE contacts_missions (contacts_id INT NOT NULL, missions_id INT NOT NULL, INDEX IDX_21A1513B719FB48E (contacts_id), INDEX IDX_21A1513B17C042CF (missions_id), PRIMARY KEY(contacts_id, missions_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE targets_missions (targets_id INT NOT NULL, missions_id INT NOT NULL, INDEX IDX_7BE4006C43B5F743 (targets_id), INDEX IDX_7BE4006C17C042CF (missions_id), PRIMARY KEY(targets_id, missions_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contacts_missions ADD CONSTRAINT FK_21A1513B719FB48E FOREIGN KEY (contacts_id) REFERENCES contacts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE contacts_missions ADD CONSTRAINT FK_21A1513B17C042CF FOREIGN KEY (missions_id) REFERENCES missions (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE targets_missions ADD CONSTRAINT FK_7BE4006C43B5F743 FOREIGN KEY (targets_id) REFERENCES targets (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE targets_missions ADD CONSTRAINT FK_7BE4006C17C042CF FOREIGN KEY (missions_id) REFERENCES missions (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE missions ADD stashs_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE missions ADD CONSTRAINT FK_34F1D47EEE826336 FOREIGN KEY (stashs_id) REFERENCES stashs (id)');
        $this->addSql('CREATE INDEX IDX_34F1D47EEE826336 ON missions (stashs_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE contacts_missions');
        $this->addSql('DROP TABLE targets_missions');
        $this->addSql('ALTER TABLE missions DROP FOREIGN KEY FK_34F1D47EEE826336');
        $this->addSql('DROP INDEX IDX_34F1D47EEE826336 ON missions');
        $this->addSql('ALTER TABLE missions DROP stashs_id');
    }
}
